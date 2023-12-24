'use server';

import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  SectionsContainer,
  SectionPrimaryHeading,
  SectionSecondaryHeading,
  SectionText
} from '@/components/Section';
import type { ReactNode } from 'react';
import type { PostgrestSingleResponse } from '@supabase/postgrest-js';

function getSpecialistFromEmployee(
  employee: {
    name: string,
    surname: string,
    degree: string
  } | null
) {
  return (
    {
      specialist: (employee) ? `${employee.name} ${employee.surname} (${employee.degree})` : null
    }
  );
}

function getPriceWithCurrency(price: number, currency: string) {
  return (
    {
      price: `${price} ${currency}`
    }
  );
}

function getFormattedDataWithNulls(
  data: Record<string, string | null>,
  specialist: { specialist: string | null },
  price: { price: string }
) {
  return Object.assign(data, specialist, price);
}

function getFormattedDataWithoutNulls(data: Record<string, string | null>) {
  function isNotNull<T>(arr: [string, T | null]): arr is [string, T] {
    return arr[1] !== null;
  }

  return Object.entries(data).filter(isNotNull);
}

function getFormattedData(
  servicesItems: {
    created_at: string,
    currency: string,
    description: string,
    employee: {
      name: string,
      surname: string,
      degree: string,
    } | null,
    id: string,
    material: string | null,
    price: number,
    service_type: string,
    title: string
  }[]
) {
  return servicesItems.map((data) => {
    const {
      created_at,
      currency,
      employee,
      id,
      price,
      service_type,
      ...filteredData
    } = data;

    const specialist = getSpecialistFromEmployee(employee);
    const priceWithCurrency = getPriceWithCurrency(price, currency);
    const formattedDataWithNulls = getFormattedDataWithNulls(filteredData, specialist, priceWithCurrency);

    return getFormattedDataWithoutNulls(formattedDataWithNulls);
  });
}

function getTableHeadsValues(data: [string, string][][]) {
  return data[0].map(arr => arr[0]);
}

function getTableHeads(data: string[]) {
  return data.map((value, idx) => {
    return (
      <TableHead className="uppercase" key={idx}>
        {value}
      </TableHead>
    );
  });
}

function getTableCells(data: [string, string][]) {
  return data.map((data, idx, arr) => {
    if (idx !== arr.length - 1) {
      return (
        <TableCell key={idx}>
          {data[1]}
        </TableCell>
      );
    } else {
      return (
        <TableCell key={idx} className="whitespace-nowrap">
          {data[1]}
        </TableCell>
      );
    }
  });
}

function getTableRows(data: [string, string][][]) {
  return data.map((data, idx) => {
    const tableCells = getTableCells(data);

    return (
      <TableRow key={idx}>
        {tableCells}
      </TableRow>
    );
  });
}

function getTable(tableTitle: string, tableHeads: ReactNode[], tableRows: ReactNode[]) {
  return (
    <Table>
      <TableCaption className="mt-0 py-4">
        {`Price list of services in category "${tableTitle}"`}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeads}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRows}
      </TableBody>
    </Table>
  );
}

function getParagraphs(data: string[]) {
  return data.map((value, idx) => {
    return (
      <p key={idx}>
        {value}
      </p>
    );
  });
}

function getTables(
  response: PostgrestSingleResponse<{
    created_at: string,
    description: string[],
    id: string,
    title: string,
    services_items: {
      created_at: string,
      currency: string,
      description: string,
      employee: {
        name: string,
        surname: string,
        degree: string,
      } | null,
      id: string,
      material: string | null,
      price: number,
      service_type: string,
      title: string
    }[]
  }[]>
) {
  if (response.error) throw new Error(response.error.message);

  if (response.data?.length) {
    return response.data.map((data) => {
      const formattedData = getFormattedData(data.services_items);
      const tableHeadsValues = getTableHeadsValues(formattedData);
      const tableHeads = getTableHeads(tableHeadsValues);
      const tableRows = getTableRows(formattedData);
      const table = getTable(data.title, tableHeads, tableRows);
      const description = getParagraphs(data.description);

      return (
        <div key={data.id} className="w-full flex flex-col gap-10">
          <div>
            <SectionSecondaryHeading>
              {data.title}
            </SectionSecondaryHeading>
            <SectionText className="max-w-2xl flex flex-col gap-2">
              {description}
            </SectionText>
          </div>
          {table}
        </div>
      );
    });
  } else {
    return (
      <SectionSecondaryHeading>
        Sorry, no pricing tables found :(
      </SectionSecondaryHeading>
    );
  }
}

export default async function Pricing() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const response = await supabase
    .from('services_types')
    .select('*, services_items(*, employee:team(*))');

  const tables = getTables(response);

  return (
    <SectionsContainer>
      <SectionPrimaryHeading>
        Check our pricing
      </SectionPrimaryHeading>
      <div className="flex-1 flex flex-col justify-center items-center gap-5 md:gap-10 pb-10">
        {tables}
      </div>
    </SectionsContainer>
  );
}
