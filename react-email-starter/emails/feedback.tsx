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
  
  interface FeedbackProps {
    feedbackLink: URL;
  }
  
  const Template = ({ feedbackLink }: FeedbackProps) => {
    return (
      <Html lang="en">
        <Head>
          <title>Mozohack Feedback Email</title>
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
                      We sincerely hope you enjoyed your time at MOZOHACK and
                      gained valuable insights from the event.<br /> As we continuously
                      strive to improve and enhance our future events, we would
                      greatly appreciate your feedback.Please take a moment to
                      share your feedback by filling out the short survey linked
                      below: <br /> <a href={feedbackLink?.toString() || '#'}>Feedback Survey link</a>
                       
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
  