Parse.Cloud.beforeSave("Item", async (request, response) => {

    if (!request.user || !request.user.get("sessionToken")) {
        response.error("Please log in");
        return;
    }

    request.object.set("owner", request.user);

    response.success(request.object);

});