import { useState } from "react";
import { useTranslation } from "react-i18next";
import MainInputs from "./Inputs";

const MainForm = () => {
  const { t } = useTranslation();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setErrorMessage("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xyeyvadb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        e.target.reset();
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((error) => error.message).join(", "));
        } else {
          setErrorMessage(t("Something went wrong. Please try again."));
        }
      }
    } catch (error) {
      setErrorMessage(t("Network error. Please check your connection."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full lg:w-1/2 items-center justify-center gap-5"
    >
      {success && (
        <div className="w-full max-w-md p-4 mb-2 text-sm text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-300 rounded-xl text-center font-medium">
          {t("Thanks for reaching out! I'll get back to you soon.")}
        </div>
      )}

      {errorMessage && (
        <div className="w-full max-w-md p-4 mb-2 text-sm text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-300 rounded-xl text-center font-medium">
          {errorMessage}
        </div>
      )}

      <MainInputs />

      <div className="w-full max-w-md">
        <textarea
          data-aos="fade-up"
          placeholder={t("Tell me about your project")}
          name="message"
          id="message"
          rows="4"
          required
          className="w-full text-purple-700 transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] focus:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:outline-none dark:text-purple-100 dark:bg-slate-900 px-6 py-4 border border-purple-500 rounded-2xl font-semibold resize-none"
        ></textarea>
      </div>

      <div className="w-full max-w-md">
        <button
          data-aos="fade-up"
          type="submit"
          disabled={submitting}
          className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg transition-all duration-300 hover:shadow-purple-500/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {submitting ? t("Sending...") : t("Send Message")}
        </button>
      </div>
    </form>
  );
};

export default MainForm;
