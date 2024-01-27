//@ts-nocheck
export const load = ({ locals }) => {
	if (locals.user) {
		// //change the value of the avatar url to the ip address of the server using the getImageURL function
		// locals.user.avatar = getImageBlob(getImageURL('users', locals.user.id, locals.user.avatar));
		return {
			user: locals.user

		};
	}

	return {
		//redirect to login if not logged in
		user: undefined
	};
};
