export type ArtPiece = {
	id: string;
	/** Display name for the artist credit. */
	artist: string;
	/** Handle / username shown under the artist name (e.g. "@someone"). Optional. */
	handle?: string;
	/** External link the handle should point to (Twitter, Bluesky, portfolio, etc.). */
	link?: string;
	/** Optional name of the person who commissioned the piece. */
	commissionedBy?: string;
	/** Optional link for the commissioner's handle. */
	commissionedByLink?: string;
	/** Path under /static (e.g. "/community-art/foo.png"). */
	image: string;
	/** Short caption — also used as alt text. */
	caption?: string;
	/** Optional rotation in degrees for the polaroid-tilt effect. */
	rotate?: number;
};

// Drop new submissions in /static/community-art/ and add an entry here.
// Always fill in `artist` and either `handle`+`link` or some way to credit them.
export const communityArt: ArtPiece[] = [
	{
		id: 'fan-art-001',
		artist: 'amenbopotupotu',
		commissionedBy: 'gloomeru',
		image: '/community-art/fan-art-001.webp',
		rotate: -1.5
	}
];

export const submitInstructions = {
	heading: 'show off your art!',
	body: 'made fan art of dinofries? a dino doodle? a fry portrait? send it over on Discord and it might end up here. credit always given.',
	discordInvite: 'https://discord.gg/XBYQhbWWw2',
	mailto: 'contact@dinofries.com',
	subject: 'community art submission'
};
