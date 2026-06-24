import { FiExternalLink } from "react-icons/fi";

function CertificateCard({ certificate }) {

    return (

        <div className="certificate-card">

            <div>

                <h3>
                    {certificate.title}
                </h3>

                <p className="certificate-issuer">
                    {certificate.issuer}
                </p>

                <span className="certificate-date">
                    Issued : {certificate.date}
                </span>

            </div>

            <a
                href={certificate.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
            >
                View Credential

                <FiExternalLink />

            </a>

        </div>

    );

}

export default CertificateCard;