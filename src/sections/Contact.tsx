import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="custom-gradient-bg text-gray-900">
          <h2>Let&apos;s create something
            amazing together</h2>
          <p>Ready to bring your next project to life? Let&apos;s
            connect and discuss how I can help you achieve
            your goals.</p>
          <button>
            <span>Contact Me</span>
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
