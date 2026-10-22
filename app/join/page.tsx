import { redirect } from "next/navigation";
import { MEMBERSHIP_FORM_URL } from "@/lib/site-links";

// Short link (pushquantum.tech/join) to the current membership form.
export default function JoinPage() {
    redirect(MEMBERSHIP_FORM_URL);
}
