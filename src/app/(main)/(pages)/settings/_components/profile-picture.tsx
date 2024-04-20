"use client";
import React from "react";
import UploadCareButton from "./uploadcare-button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
	userImage: string | null;
	onDelete?: any;
	onUpload?: any;
};

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
	const router = useRouter();

	const onRemoveProfileImage = async () => {
		const deleted = await onDelete();
		if (deleted) {
			router.refresh();
		}
	};
	return (
		<div className='flex flex-col'>
			<p className='text-lg text-white'> Profile Picture</p>
			<div className='flex h-[30vh] flex-col items-center justify-center'>
				{userImage ? (
					<>
						<div className='relative h-full w-2/12'>
							<Image src={userImage} alt='User_Image' fill />
						</div>
						<Button
							className='bg-transparent text-white/70 hover:bg-transparent hover:text-white'
							onClick={onRemoveProfileImage}
						>
							<X /> Remove Logo
						</Button>
					</>
				) : (
					<UploadCareButton />
				)}
			</div>
		</div>
	);
};

export default ProfilePicture;
