"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserProfileInterface } from "@/types/user";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function ProfilePage() {
  const { user, isLoggedIn, logout, isHydrated } = useAuth();
  const [profile, setProfile] = useState<UserProfileInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log(user?.id + " fadsklf;masldfkdmaskfdaldkf" + isLoggedIn);

  useEffect(() => {
    if (!isHydrated) return;

    if (!isLoggedIn || !user?.id) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${user.id}`);
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Failed to load user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [isLoggedIn, user?.id, router, isHydrated]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading profile...
        </p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-10 text-red-600">
        Unable to load your profile.
      </div>
    );
  }

  return (
    <Container>
      <div className=" bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={100}
            height={100}
            src={profile.image}
            alt={profile.username}
          />
          <h1 className="text-2xl font-semibold">
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="text-gray-500">@{profile.username}</p>
          <p className="text-gray-700">{profile.email}</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h2 className="font-semibold mb-1">Birthdate</h2>
            <p>{profile.birthDate}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Phone</h2>
            <p>{profile.phone}</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Address</h2>
            <p>
              {profile.address.address}, {profile.address.city},{" "}
              {profile.address.country}
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Company</h2>
            <p>
              {profile.company.title} @ {profile.company.name}
              <br />({profile.company.department})
            </p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Bank</h2>
            <p>
              {profile.bank.cardType} — ****{profile.bank.cardNumber.slice(-4)}{" "}
              <br />
              Expires: {profile.bank.cardExpire}
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button label="Logout" onClick={logout} />
        </div>
      </div>
    </Container>
  );
}
