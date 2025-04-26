export default function Legal () {
    return (
        <div id="mentions" className="flex flex-col ms-10 me-10 lg:ms-36 lg:me-36 mt-36 mb-15">
            <div>
                <p className="text-3xl lg:text-5xl">Mentions Légales</p>
            </div>
            <div className="flex flex-col gap-10 mt-20 text-xl leading-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
                    <p>Le présent site est édité par Pierre Maurer - Maurer Développement, auto-entrepreneur.</p>
                    <p>Adresse : 35 rue de Koestlach, 68480 Vieux-Ferrette, France.</p>
                    <p>SIRET : 95279914600016.</p>
                    <p>Directeur de la publication : Pierre Maurer.</p>
                    <p>Email de contact : <a href="mailto:contact@maurer-developpement.fr" className="underline">contact@maurer-developpement.fr</a></p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Hébergeur du site</h2>
                    <p>Hébergeur : OVH Cloud.</p>
                    <p>Adresse : 2, rue Kellermann, 59100 Roubaix, France.</p>
                    <p>Téléphone : +33 9 72 10 10 07.</p>
                    <p>Site web : <a href="https://www.ovhcloud.com" target="_blank" className="underline">www.ovhcloud.com</a></p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
                    <p>Les éléments présents sur ce site (textes, images, graphismes, logos, icônes, etc.) sont protégés par les lois françaises relatives à la propriété intellectuelle.</p>
                    <p>Toute reproduction ou adaptation sans autorisation préalable est interdite.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">4. Responsabilité</h2>
                    <p>Pierre Maurer ne saurait être tenu responsable des dommages directs ou indirects causés par l&apos;accès ou l&apos;utilisation du site.</p>
                    <p>Des liens vers des sites tiers peuvent être proposés ; leur contenu relève de la responsabilité de leurs éditeurs respectifs.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">5. Protection des données personnelles</h2>
                    <p>Ce site ne collecte aucune donnée personnelle et n&apos;utilise aucun cookie ou traceur.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">6. Loi applicable</h2>
                    <p>Le site est régi par la loi française. Tout litige sera soumis à la compétence exclusive des tribunaux français.</p>
                </section>
            </div>
        </div>
    );
};
