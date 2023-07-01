import Parse from "parse";


// used in auth register component
export const createUser = async (newUser) => {

    await Parse.User.logOut();
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);

    return user
        .signUp()
        .then((newUserSaved) => {
            return newUserSaved;
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
            return  error;
        });
};
