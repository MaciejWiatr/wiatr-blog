import Twemoji from "@shared/components/Twemoji";
import { useRef, useState } from "react";
import isEmail from "validator/lib/isEmail";
import sanitizeHtml from "sanitize-html";
import cls from "classnames";
import addNewsletterSubscriber from "../../api/newsletter";

const NewsletterForm = () => {
	const [formError, setFormError] = useState("");
	const [formSuccess, setFormSuccess] = useState("");
	const inputRef = useRef(null);

	// Should probably change it to state machine some day
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const sanitized = sanitizeHtml(inputRef.current.value);
		if (!isEmail(sanitized)) {
			setFormError("Niepoprawny adres email");
			setFormSuccess("");
			return;
		}
		setFormError("");
		try {
			await addNewsletterSubscriber(sanitized);
			setFormSuccess("Dzięki");
		} catch (e: unknown) {
			setFormError("Coś poszło nie tak");
			setFormSuccess("");
		}

		// @ts-ignore
		e.target.reset();
	};

	return (
		<form onSubmit={onSubmit} className="relative flex mt-4 space-x-2">
			<input
				data-cy="newsletter-input"
				ref={inputRef}
				placeholder="Twój adres email"
				className={cls(
					"w-full h-12 max-w-xs p-2 px-4 bg-gray-700 rounded-xl placeholder:text-sm focus:outline-none focus:ring-2",
					{
						"border-2 border-red-500": formError,
					}
				)}
			/>
			{formError && (
				<p
					data-cy="newsletter-error"
					className="absolute text-xs text-red-500 -bottom-5 -left-2"
				>
					{formError}
				</p>
			)}
			<button
				type="submit"
				data-cy="newsletter-submit"
				className="flex items-center h-12 p-2 pl-4 pr-4 text-white transition-all border border-gray-600 hover:bg-gray-700 rounded-xl"
			>
				<span className="mr-1 text-sm font-medium">
					{formSuccess ? formSuccess : "Dołącz"}
				</span>{" "}
				<Twemoji emoji={"❤"} />
			</button>
		</form>
	);
};

export default NewsletterForm;
