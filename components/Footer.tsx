import { Button } from '@/components/ui/button';
import {
  Facebook,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Mail,
  Phone,
  Twitter
} from 'lucide-react';
import { SectionsContainer } from '@/components/Section';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pt-12 pb-16 border-t border-border/60 text-sm">
      <SectionsContainer>
        <section className="flex flex-col gap-4">
          <div className="w-full flex flex-col md:flex-row gap-2 justify-between">
            <div>
              <h2 className="px-4 py-2 text-xl font-bold">
                Contact
              </h2>
              <ul>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="tel:" className="whitespace-pre">
                      Phone: <span className="font-semibold">000 000 000</span>
                      <Phone className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="mailto:" className="whitespace-pre">
                      Email: <span className="font-semibold"> example@email.com</span>
                      <Mail className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <h3 className="inline-flex items-center justify-center h-10 px-4 py-2 text-foreground/60">
                    Address:
                  </h3>
                  <div className="ml-4">
                    <p className="px-4 pb-2 font-semibold text-foreground/60 whitespace-nowrap leading-relaxed">
                      John Doe St. 0<br />
                      00-000 Szczecin<br />
                      West Pomerania, Poland
                    </p>
                  </div>
                </li>
                <li>
                  <h3 className="inline-flex items-center justify-center h-10 px-4 py-2 text-foreground/60">
                    Opening Hours:
                  </h3>
                  <ul className="ml-4">
                    <li>
                      <p className="px-4 pb-2 text-foreground/60 whitespace-nowrap leading-relaxed">
                        Monday-Friday: <span className="font-semibold">8:00 - 20:00</span><br />
                        Saturday: <span className="font-semibold">10:00 - 16:00</span><br />
                        Sunday: <span className="font-semibold">closed</span>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="px-4 py-2 text-xl font-bold">
                Health Hub
              </h2>
              <ul>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor sit amet
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor sit
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor sit amet
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="px-4 py-2 text-xl font-bold">
                Support
              </h2>
              <ul>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor sit amet
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum dolor
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost"
                          className="font-normal text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                          asChild
                  >
                    <a href="/">
                      Lorem ipsum
                      <LinkIcon className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <ul className="flex justify-center gap-2">
            <li>
              <Button variant="ghost"
                      className="px-2 text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                      asChild
              >
                <a href="/">
                  <Instagram />
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                      className="px-2 text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                      asChild
              >
                <a href="/">
                  <Facebook />
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                      className="px-2 text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                      asChild
              >
                <a href="/">
                  <Twitter />
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost"
                      className="px-2 text-foreground/60 hover:bg-transparent hover:text-foreground/80"
                      asChild
              >
                <a href="/">
                  <Linkedin />
                </a>
              </Button>
            </li>
          </ul>
        </section>
      </SectionsContainer>
    </footer>
  );
}
