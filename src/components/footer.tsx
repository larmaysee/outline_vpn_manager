"use client";

import { Link } from "@heroui/link";
import { Tooltip, useDisclosure } from "@heroui/react";

import { GithubIcon, HeartIconDuotone, RedditIcon } from "@/src/components/icons";
import DonationModal from "@/src/components/modals/donation-modal";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { app } from "@/src/core/config";

export const Footer = () => {
    const donationModalDisclosure = useDisclosure();

    return (
        <footer className="w-full grid place-items-center gap-8 py-5">
            <DonationModal disclosure={donationModalDisclosure} />

            <div className="flex gap-6 items-center justify-center">
                <Tooltip closeDelay={100} content="Donation">
                    <Link href="#" onPress={donationModalDisclosure.onOpen}>
                        <HeartIconDuotone className="text-default-500" size={24} />
                    </Link>
                </Tooltip>

                <Tooltip closeDelay={100} content="Github page">
                    <Link isExternal href={app.links.github}>
                        <GithubIcon className="text-default-500" size={24} />
                    </Link>
                </Tooltip>

                <Tooltip closeDelay={100} content="Reddit page">
                    <Link isExternal href={app.links.outlineVpnWiki.index}>
                        <RedditIcon className="text-default-500" size={24} />
                    </Link>
                </Tooltip>

                <ThemeSwitch />
            </div>
        </footer>
    );
};
