import axios from "axios";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Revalidate: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authorized, setAuthorized] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!localStorage) {
      setIsLoading(false);
      return;
    }

    if (!localStorage.getItem("password")) {
      setIsLoading(false);
      return;
    }

    const checkAuth = async () => {
      const password = localStorage.getItem("password");
      const res = await axios.post("/api/check-admin-access", {
        password,
      });
      if (res.status === 200 && res.data.message === "Authorized") {
        localStorage.setItem("password", password);
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const onPasswordSubmit = async (data: any) => {
    const password = data.password;
    const res = await axios.post("/api/check-admin-access", {
      password,
    });
    if (res.status === 200 && res.data.message === "Authorized") {
      localStorage.setItem("password", process.env.ADMIN_PASSWORD_HASH);
      toast.success("Authorized");
      setAuthorized(true);
    } else {
      toast.error("Wrong password");
      setAuthorized(false);
    }
  };

  return (
    <>
      <NextSeo
        title="Login"
        description="Authorized personnel allowed only. This page is used to login as administrator to control the website."
      />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p>
          Only authorized personnel allowed here! If you are not one of them,
          please leave this page immediately.
        </p>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center">
          {authorized ? (
            <>
              <button>Revalidate home</button>
            </>
          ) : (
            <form
              onSubmit={handleSubmit(onPasswordSubmit)}
              className="flex flex-col gap-4 sm:flex-row sm:gap-0 sm:space-x-2"
            >
              <input
                type="password"
                className="rounded-md border-[1px] border-gray-300 px-4 py-2 transition duration-200 hover:border-gray-200 focus:border-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-60 dark:border-tertiary dark:bg-secondary dark:hover:border-accent"
                placeholder="Admin Password"
                {...register("password", { required: true })}
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-200 px-4 py-2 text-black transition duration-200 hover:ring-2 hover:ring-gray-300 dark:bg-gray-600 dark:bg-opacity-40 dark:text-white"
              >
                Login
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Revalidate;
