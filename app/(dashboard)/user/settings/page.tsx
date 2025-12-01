"use client";

import SharedNotificationSettings from "@/components/SharedNotificationSettings";
import React from "react";

const UserSettings = () => {
    return (
        // same container as UserProfilePage + Navbar
        <div className="w-3/4 mx-auto">
            <SharedNotificationSettings
                title="User Settings"
                subtitle="Manage your user notification settings"
            />
        </div>
    );
};

export default UserSettings;
