export default function Legal () {
    return (
        <div id="legal" className="flex flex-col ms-10 me-10 lg:ms-36 lg:me-36 mt-36 mb-15">
            <div>
                <p className="text-3xl lg:text-5xl">Legal Notice</p>
            </div>
            <div className="flex flex-col gap-10 mt-20 text-xl leading-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Website Publisher</h2>
                    <p>This site is published by Pierre Maurer - Maurer Développement, self-employed entrepreneur.</p>
                    <p>Address: 35 rue de Koestlach, 68480 Vieux-Ferrette, France.</p>
                    <p>SIRET: 95279914600016.</p>
                    <p>Publication Director: Pierre Maurer.</p>
                    <p>Contact Email: <a href="mailto:contact@maurer-developpement.fr" className="underline">contact@maurer-developpement.fr</a></p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Hosting Provider</h2>
                    <p>Hosting Provider: OVH Cloud.</p>
                    <p>Address: 2 rue Kellermann, 59100 Roubaix, France.</p>
                    <p>Phone: +33 9 72 10 10 07.</p>
                    <p>Website: <a href="https://www.ovhcloud.com" target="_blank" className="underline">www.ovhcloud.com</a></p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                    <p>All content on this site (texts, images, graphics, logos, icons, etc.) is protected by French intellectual property laws.</p>
                    <p>Any reproduction or adaptation without prior written permission is strictly prohibited.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Liability</h2>
                    <p>Pierre Maurer shall not be liable for any direct or indirect damages resulting from access to or use of the site.</p>
                    <p>Links to third-party websites are provided for convenience only, and their content is the sole responsibility of their respective publishers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Personal Data Protection</h2>
                    <p>No personal data is collected and no cookies or tracking devices are used on this site.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
                    <p>This website is governed by French law. Any disputes will fall under the exclusive jurisdiction of the French courts.</p>
                </section>
            </div>
        </div>
    );
};
