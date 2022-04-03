import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from '../graphql/mutations/createUser';

export const CreateUser = () => {
	const [createMutation,] = useMutation(CREATE_USER);
	const navigate = useNavigate();

	return (
		<Form
			onSubmit={async (values) => {

				await createMutation({
					variables: {
						...values,
					},
					onCompleted: (data) => {
						console.log(data);
						// localStorage.setItem('token', data?.login?.token);
						navigate('/success');
					}
				});
			}}
			initialValues={{
				firstName: '',
				lastName: '',
				username: '',
				playerId: '',
				role: '',
				email: '',
				password: '',
				club: '',
				location: '',
			}}
			render={({values, handleSubmit, form}) => {

				return (
					<div>
                        <h1>FirstName</h1>
						<Field
							name='firstName'
							component='input'
						/>
						<h1>Last Name</h1>
						<Field
							name='lastName'
							component='input'
						/>
						<h1>Username</h1>
						<Field
							name='username'
							component='input'
						/>
						<h1>Email</h1>
						<Field
							name='email'
							component='input'
						/>
						<h1>Password</h1>
						<Field
							name='password'
							component='input'
							type='password'
						/>
						<h1>Club</h1>
						<Field
							name='club'
							component='input'
						/>
						<h1>Location</h1>
						<Field
							name='location'
							component='input'
						/>
						<button
							disabled={
								values?.password?.length === 0 || values?.email?.length === 0
							}
							onClick={async () => {
								await handleSubmit();
								form.reset();
							}}>
							Submit
						</button>
					</div>
				)
			}}
		/>
	)
}