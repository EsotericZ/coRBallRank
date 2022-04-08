import { Form, Field } from 'react-final-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../graphql/mutations/login';

const Login = () => {
	const [loginMutation,] = useMutation(LOGIN);
	const navigate = useNavigate();

	return (
		<Form
			onSubmit={async (values) => {
				await loginMutation({
					variables: {
						...values,
					},
					onCompleted: (data) => {
						console.log(data);
						localStorage.setItem('token', data?.login?.token);
						navigate('/');
					}
				});
			}}
			initialValues={{
				email: '',
				password: '',
			}}
			render={({values, handleSubmit, form}) => {

				return (
					<>
						<Field
							name='email'
							component='input'
						/>
						<Field
							name='password'
							component='input'
							type='password'
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
					</>
				)
			}}
		/>
	)
}

export default Login;