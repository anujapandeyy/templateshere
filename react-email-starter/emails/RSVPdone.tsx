import {
    Html,
    Head,
    Font,
    Tailwind,
    Body,
    Container,
    Section,
    Text,
    Img,
    Link,
  } from "@react-email/components";
  import * as React from "react";
  
  interface RSVPProps {
      excelSheetLink: URL;
  }
  
  const Template = ({excelSheetLink}: RSVPProps) => {
    return (
      <Html lang="en">
        <Head>
          <title>Mozohack Registration Email</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
          />
        </Head>
        <Tailwind>
          <Body className="mx-auto my-auto bg-white p-4">
            <Container>
              <Section className="bg-black">
                <Img src="/static/Header.png" alt="mozohack" className="w-full" />
              </Section>
              <Section>
                <Container className="p-4">
                  <Section>
                    <Text className="text-black text-lg">
                      Thank you for registering for this year's edition of
                      MOZOHACK! This is a reminder for you that event details,
                      timings and location are found here: <a href={excelSheetLink?.toString() || '#'}>Excel Sheet link</a> Kindly
                      join us at MOZOHACK for an enriching experience and valuable
                      networking opportunities. 
                     
                      <br />
                      Regards, <br />
                      SRMKZILLA
                    </Text>
                  </Section>
                </Container>
              </Section>
  
              <Section className="bg-black my-auto mx-auto font-sans p-4">
                <div className="flex justify-between">
                  <div>
                    <Text className="text-lg text-white">SRMKZILLA</Text>
                    <Text className="text-lg text-white">
                      SRM Institute Of Science And Technology
                    </Text>
                    <Text className="text-lg text-white">
                      Chennai, Tamil Nadu , 603203
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href="https://twitter.com/SRMKZILLA_Club">
                      <Img
                        src="/static/social.png"
                        className="w-8 bg-white rounded-full"
                      />
                    </Link>
                    <Link href="https://www.instagram.com/srmkzilla/">
                      <Img
                        src={"/static/instagram.png"}
                        className="w-8 bg-white rounded-full"
                      />
                    </Link>
                    <Link href="https://www.youtube.com/@SRMKZILLA">
                      <Img
                        src="/static/play.png"
                        className="w-8 bg-white rounded-full"
                      />
                    </Link>
                    <Link href="https://www.linkedin.com/company/srmkzilla">
                      <Img
                        src="/static/linkedin.png"
                        className="w-8 bg-white rounded-full"
                      />
                    </Link>
                  </div>
                </div>
                <Text className="text-sm flex justify-center items-center text-white">
                  sent with ❤️ by your friends on the SRMKZILLA team
                </Text>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default Template;
  