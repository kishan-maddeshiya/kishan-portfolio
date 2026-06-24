import certificates from "../../../constants/certificates";

import CertificateCard from "./CertificateCard";

function Certificates() {

    return (

        <div className="certificates">

            <h2 className="certificate-heading">

                Certifications

            </h2>

            <div className="certificate-grid">

                {certificates.map((certificate) => (

                    <CertificateCard
                        key={certificate.id}
                        certificate={certificate}
                    />

                ))}

            </div>

        </div>

    );

}

export default Certificates;