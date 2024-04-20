export const cognitoConfig = {
    Auth: {
        Cognito: {
            userPoolId: "bar",
            userPoolClientId: "barbaz",
            // Login options (optional)
            loginWith: {
                username: true,
                email: false,
                phone: false,
            },
            mfaConfiguration: "OFF",
            passwordProtectionSettings: {
                minLength: 8,
            },
            verificationMechanisms: ["EMAIL"],
        }
    }
};
