import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const PAGE_SIZE = 30;

export const AUTH_SESSION_KEY = "oa-auth-session";

export const ADMIN_PASSWORD_ROUTE = "/admin";
export const LOGIN_ROUTE = "/";
export const HOME_ROUTE = "/servers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono"
});

export const app = {
    name: "Outline Admin",
    description:
        "Outline Admin is a web interface for the Outline Manager API, providing a simple and user-friendly UI for managing VPN servers.",

    fonts: {
        fontSans,
        fontMono
    },

    links: {
        github: "https://github.com/larmaysee/outline_vpn_manager",
        x: "https://x.com/AmRo045",
        me: "https://amro045.github.io",
        outlineVpnWiki: {
            index: "https://www.reddit.com/r/outlinevpn/wiki/index",
            dynamicAccessKeys: "https://www.reddit.com/r/outlinevpn/wiki/index/dynamic_access_keys"
        }
    },

    snippets: {
        newOutlineServer: `sudo bash -c "$(wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh)"`,
        existingServer: `sudo bash -c "$(wget -qO- https://github.com/larmaysee/outline_vpn_manager/blob/main/access.sh)"`,
        exampleServerManagementJson: `{"apiUrl":"https://xxx.xxx.xxx.xxx:xxxxx/xxxxxxxxxxxxxxxxxxxxxx","certSha256":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}`
    },

    donation: {}
};
