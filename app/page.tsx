import { SectionPrimaryHeading } from '@/components/Section';

export default async function Index() {
  return (
    <>
      <section className="h-hero flex flex-row items-center justify-center animate-in">
        <SectionPrimaryHeading>
          Your Health is in Your Hands
        </SectionPrimaryHeading>
      </section>
    </>
  );
}
