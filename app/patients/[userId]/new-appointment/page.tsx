import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import * as Sentry from "@sentry/nextjs";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);

  // used for tracking the number of users that viewed a page.
  Sentry.metrics.set("user_view_new_appointment", patient?.name);
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient?.$id}
          />

          <p className="copyright mt-10 py-12">© 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src={"/assets/images/appointment-img.png"}
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </main>
  );
}
