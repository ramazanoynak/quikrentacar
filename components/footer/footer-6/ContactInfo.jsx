const ContactInfo = ({ t }) => {
  const contactContent = [
    {
      id: 1,
      title: t("home:footer.need_live_support"),
      action: "mailto:ramazan@quikrentacar.com",
      text: "support@quickrentacar.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className="mt-30">
            <div className="text-14 mt-30">{item.title}</div>
            <a href={item.action} className="text-18 fw-500 mt-5">
              {item.text}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
