import GitHubActivity from "./GitHubActivity";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="py-20 lg:py-28 bg-(--surface)" id="contact">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <GitHubActivity />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
