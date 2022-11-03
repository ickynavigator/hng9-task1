import { Button, Checkbox, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { name } from 'src/info';
import styles from './index.module.scss';

export const Contact: React.FC = () => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      TOS: false,
    },
  });

  return (
    <div className={styles.contact}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title order={1}>Contact Me</Title>
        <Text>Hi there, contact me to ask me about anything you have in mind.</Text>

        <Stack my={'md'}>
          <Checkbox label={`You agree to providing your data to ${name} who may contact you.`} />
        </Stack>

        <Button fullWidth type="submit" radius={'md'} id="btn_submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
