import redirectSSL from "redirect-ssl";

export default fromNodeMiddleware(
	redirectSSL.create({
		exclude: ["localhost"],
	})
);
