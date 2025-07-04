import { generatePageMetadata } from "@/app/metadata";
import SignInPage from "@/components/SignInPage/SignInPage";

export const generateMetadata = () => {
  return generatePageMetadata({
    title: "Sign In | CoverGenie",
    description: "Sign In | CoverGenie",
  });
};

const page = () => {
  return <SignInPage />;
};

export default page;
