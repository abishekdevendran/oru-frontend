import React, { useEffect, useState } from 'react';

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import OTPs from '@/fetchers/user/OTPs';
import { Loader } from 'lucide-react';
import useUser from '@/hooks/useUser';
import { toast } from 'react-toastify';

const formSchemaCreate = z.object({
	mobileNumber: z
		.string()
		.min(10, 'Mobile Number must be a 10 digit number')
		.max(10, 'Mobile Number must be a 10 digit number')
		.refine(
			(value) => parseInt(value).toString() === value,
			'Mobile Number must be a number',
		)
		.refine(
			(value) => parseInt(value[0]) > 6,
			'Cannot be a valid Indian number',
		),
});

const formSchemaValidate = z.object({
	otp: z
		.string()
		.min(4, 'OTP must be a 4 digit number')
		.max(4, 'OTP must be a 4 digit number')
		.refine(
			(value) => parseInt(value).toString() === value,
			'OTP must be a number',
		),
});

const LoginPopup = ({
	isOpen,
	setOpen,
}: {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setUser } = useUser();
	const [isFetching, setIsfetching] = useState(false);
	const [tab, setTab] = useState<'otpCreate' | 'otpValidate'>('otpCreate');
	const [mobileNumber, setMobileNumber] = useState<number>();
	const [timer, setTimer] = useState(0);
	const form = useForm<z.infer<typeof formSchemaCreate>>({
		resolver: zodResolver(formSchemaCreate),
	});
	const formValidate = useForm<z.infer<typeof formSchemaValidate>>({
		resolver: zodResolver(formSchemaValidate),
	});
	async function sendOTP() {
		try {
			setIsfetching(true);
			const resp = await toast.promise(
				OTPs.otpCreate({
					countryCode: parseInt('91'),
					mobileNumber: mobileNumber!,
				}),
				{
					pending: 'Sending OTP',
					success: 'OTP Sent',
					error: 'OTP Sending failed',
				},
			);
			setIsfetching(false);
		} catch (err) {
			console.log(err);
		}
	}
	async function onSubmit(values: z.infer<typeof formSchemaCreate>) {
		setMobileNumber(parseInt(values.mobileNumber));
		setIsfetching(true);
		try {
			const resp = await toast.promise(
				OTPs.otpCreate({
					countryCode: parseInt('91'),
					mobileNumber: parseInt(values.mobileNumber),
				}),
				{
					pending: 'Sending OTP',
					success: 'OTP Sent',
					error: 'OTP Sending failed',
				},
			);
			setIsfetching(false);
			setTab('otpValidate');
			setTimer(30);
		} catch (err) {
			console.log(err);
		}
	}
	async function onValidate(values: z.infer<typeof formSchemaValidate>) {
		try {
			setIsfetching(true);
			const resp = await toast.promise(
				OTPs.otpValidate({
					countryCode: parseInt('91'),
					mobileNumber: mobileNumber!,
					otp: parseInt(values.otp),
				}),
				{
					pending: 'Verifying OTP',
					success: 'OTP Verified. Signed in successfully',
					error: 'OTP Verification failed',
				},
			);
			setIsfetching(false);
			if (resp.status === 'SUCCESS') {
				setUser(resp.user);
				setOpen(false);
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		if (timer > 0 && tab === 'otpValidate') {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		}
	}, [timer, tab]);
	return (
		<AlertDialog open={isOpen} onOpenChange={setOpen}>
			<AlertDialogContent className="w-4/5 md:w-full">
				<AlertDialogHeader>
					<AlertDialogTitle>Login</AlertDialogTitle>
					<AlertDialogDescription>
						<div className="flex flex-col items-center justify-center">
							<Tabs value={tab} className="w-full">
								<TabsList className="w-full flex items-center justify-center">
									<TabsTrigger value="otpCreate" className="w-full">
										Generate OTP
									</TabsTrigger>
									<TabsTrigger value="otpValidate" className="w-full">
										Validate OTP
									</TabsTrigger>
								</TabsList>
								<TabsContent value="otpCreate">
									<Form {...form}>
										<form
											onSubmit={form.handleSubmit(onSubmit)}
											className="space-y-8"
										>
											<FormField
												control={form.control}
												name="mobileNumber"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Mobile Number</FormLabel>
														<FormControl>
															<Input
																type="tel"
																placeholder="9128376455"
																{...field}
															/>
														</FormControl>
														<FormDescription>
															This is/will be the number associated with your
															account.
														</FormDescription>
														<FormMessage />
													</FormItem>
												)}
											/>
											{isFetching ? (
												<Loader />
											) : (
												<Button type="submit">Send OTP</Button>
											)}
										</form>
									</Form>
								</TabsContent>
								<TabsContent value="otpValidate">
									<Form {...formValidate}>
										<form
											onSubmit={formValidate.handleSubmit(onValidate)}
											className="space-y-8"
										>
											<FormField
												control={formValidate.control}
												name="otp"
												render={({ field }) => (
													<FormItem>
														<FormLabel>Mobile Number</FormLabel>
														<FormControl>
															<Input type="tel" placeholder="9182" {...field} />
														</FormControl>
														<FormDescription>
															{`You can request your OTP again ${
																timer > 0 ? `in ${timer} seconds.` : 'now.	'
															}`}
														</FormDescription>
														<FormMessage />
													</FormItem>
												)}
											/>
											{isFetching ? (
												<Loader />
											) : (
												<div className="flex gap-4">
													<Button type="submit">Validate OTP</Button>
													{timer === 0 && (
														<Button
															onClick={(e) => {
																e.preventDefault();
																sendOTP();
															}}
														>
															Resend OTP
														</Button>
													)}
												</div>
											)}
										</form>
									</Form>
								</TabsContent>
							</Tabs>
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="w-full text-center flex sm:items-center sm:justify-center">
					<Button variant="link" onClick={() => setOpen(false)}>
						Continue as guest
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default LoginPopup;
