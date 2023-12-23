'use server';

import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  SectionPrimaryHeading,
  SectionSecondaryHeading,
  SectionsContainer
} from '@/components/Section';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';

function getParagraphs(data: string[]) {
  return data.map((value, idx) => {
    return (
      <p key={idx}>
        {value}
      </p>
    );
  });
}

function getTeamCards(
  response: PostgrestSingleResponse<{
    avatar: string;
    biography: string[];
    description: string[];
    id: string;
    name: string;
    specialization: string;
    surname: string;
    degree: string;
  }[]>,
  url: string
) {
  if (response.error) throw new Error(response.error.message);

  if (response.data?.length) {
    return (
      response.data.map((data) => {
        const description = getParagraphs(data.description);
        const biography = getParagraphs(data.biography);

        return (
          <Card key={data.id} className="w-full">
            <div className="md:flex flex-row justify-between">
              <CardHeader className="flex-row space-y-0 gap-6 min-w-fit">
                <Avatar className="h-16 md:h-32 w-16 md:w-32">
                  <AvatarImage
                    src={`${url}${data.avatar}`}
                    alt={`${data.name} ${data.surname}`}
                  />
                  <AvatarFallback className="md:text-2xl">
                    {`${data.name.at(0)}${data.surname.at(0)}`}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-fit flex flex-col">
                  <CardTitle className="leading-relaxed">
                    <span className="text-sm mr-2.5">{`${data.degree}`}</span>
                    {`${data.name} ${data.surname}`}
                  </CardTitle>
                  <CardDescription>
                    {`Specialization: ${data.specialization}`}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="md:p-6 md:w-3/5 flex flex-col gap-2 leading-relaxed">
                {description}
              </CardContent>
            </div>
            <CardFooter>
              <Accordion type="single" className="w-full bg-muted/50 rounded-t-lg" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="justify-center gap-3">
                    Read more
                  </AccordionTrigger>
                  <AccordionContent className="px-6 flex flex-col gap-2 text-base leading-relaxed">
                    {biography}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardFooter>
          </Card>
        );
      })
    );
  } else {
    return (
      <SectionSecondaryHeading>
        Sorry, no team members found :(
      </SectionSecondaryHeading>
    );
  }
}

export default async function Team() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const response = await supabase
    .from('team')
    .select('*');

  const { data: { publicUrl: url } } = supabase
    .storage
    .from('www')
    .getPublicUrl('avatars/');

  const teamCards = getTeamCards(response, url);

  return (
    <SectionsContainer>
      <SectionPrimaryHeading>
        Meet our team
      </SectionPrimaryHeading>
      <div className="flex-1 flex flex-col justify-center items-center gap-5 md:gap-10 pb-10">
        {teamCards}
      </div>
    </SectionsContainer>
  );
}
