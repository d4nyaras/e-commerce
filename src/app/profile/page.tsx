"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext"; // Adjust path if different

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setProfile(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch profile:", err);
          setLoading(false);
        });
    }
  }, [user?.id]);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!profile)
    return <div className="p-8 text-center text-red-500">User not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-6 items-center mb-6">
        <Image
          src={profile.image}
          alt={profile.firstName}
          width={96}
          height={96}
          className="rounded-full border-4 border-blue-500"
        />
        <div>
          <h2 className="text-2xl font-bold">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-gray-600">@{profile.username}</p>
          <p className="text-sm text-gray-500">{profile.email}</p>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6 space-y-3">
        <p>
          <strong>Phone:</strong> {profile.phone}
        </p>
        <p>
          <strong>Birth Date:</strong> {profile.birthDate}
        </p>
        <p>
          <strong>University:</strong> {profile.university}
        </p>
        <p>
          <strong>Company:</strong> {profile.company.name},{" "}
          {profile.company.title}
        </p>
        <p>
          <strong>Address:</strong> {profile.address.address},{" "}
          {profile.address.city}, {profile.address.state}
        </p>
      </div>
    </div>
  );
}
