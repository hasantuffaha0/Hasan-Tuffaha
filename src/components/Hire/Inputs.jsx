import { useTranslation } from "react-i18next";

const MainInputs = () => {
    const { t } = useTranslation();
    const Inputs = [
    {
      inputType: "text",
      inputPlaceHolder: "Full Name",
      inputId: "full-name",
      inputName: "full-name",
      inputRequired: true,
    },
    {
      inputType: "email",
      inputPlaceHolder: "Email Address",
      inputId: "email-address",
      inputName: "email-address",
      inputRequired: true,
    },
    {
      inputType: "text",
      inputPlaceHolder: "Project Type",
      inputId: "project-type",
      inputName: "project-type",
      inputRequired: false,
    },
  ];

    return (
        <div className="w-full max-w-md flex flex-col gap-5">
              {Inputs.map(
                (
                  {
                    inputType,
                    inputPlaceHolder,
                    inputName,
                    inputId,
                    inputRequired,
                  },
                  index,
                ) => (
                  <input
                    type={inputType}
                    placeholder={t(inputPlaceHolder)}
                    name={inputName}
                    id={inputId}
                    required={inputRequired}
                    key={index}
                    className="w-full text-purple-700 transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.2)] focus:shadow-[0_0_20px_rgba(168,85,247,0.4)] focus:outline-none dark:text-purple-100 dark:bg-slate-900 px-6 py-4 border border-purple-500 rounded-2xl font-semibold"
                  />
                ),
              )}
            </div>
    )
}

export default MainInputs