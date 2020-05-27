import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import { SocialQuery } from "../../../graphql-types";

import "./social.css";

export default function Social() {
	const data: SocialQuery = useStaticQuery(graphql`
		query Social {
			site {
				siteMetadata {
					social {
						github
						twitter
						linkedIn
					}
				}
			}
		}
	`);

	const social = data.site.siteMetadata.social;

	return (
		<big>
			<a
				className="social-link no-invert"
				href={`https://www.github.com/${social.github}`}
			>
				<FontAwesomeIcon icon={faGithub} width={16} />
			</a>{" "}
			<a
				className="social-link no-invert"
				href={`https://www.linkedin.com/in/${social.linkedIn}`}
			>
				<FontAwesomeIcon icon={faLinkedin} width={16} />
			</a>{" "}
			<a
				className="social-link no-invert"
				href={`https://www.twitter.com/${social.twitter}`}
			>
				<FontAwesomeIcon icon={faTwitter} width={16} />
			</a>
		</big>
	);
}