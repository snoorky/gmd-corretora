"use client";

import { useEffect } from "react";

export default function ScrollToHashOffset() {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				setTimeout(() => {
					const yOffset = -window.innerHeight * 0.4;
					const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

					window.scrollTo({ top: y, behavior: "smooth" });
				}, 100);
			}
		}
	}, []);

	return null;
}
