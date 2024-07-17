import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="pt-12 grid xl:grid-cols-2 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary mb-4 text-lg">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello 👋</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-illustration_light dark:bg-illustration_dark bg-contain bg-no-repeat"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>youremail@gmail.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>8420 Pine Avenue, Meadowville MC 842</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+44 123 456 789</div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
