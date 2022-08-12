import Link from "@/components/Shared/Link";

const Contact = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Contact</h2>

      <p className="text-lg font-normal dark:text-gray-100">
        Looking for collaboration? Email me at{" "}
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          className="dark:text-blue-400 dark:hover:!text-blue-300"
        >
          {process.env.NEXT_PUBLIC_EMAIL}
        </Link>
      </p>
    </div>
  );
};

export default Contact;
