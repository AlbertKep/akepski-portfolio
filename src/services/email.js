import emailjs from "@emailjs/browser";

export let requestError;
export const sendEmail = async (ref) => {
  try {
    await emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      ref,
      process.env.REACT_APP_PUBLIC_KE
    );
    requestError = false;
  } catch (error) {
    requestError = true;
    throw new Error(error?.message || "Unknown error occurred");
  }
};
