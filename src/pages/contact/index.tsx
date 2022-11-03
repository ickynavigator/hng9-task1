import Footer from '@Comp/Footer';
import { Button, Checkbox, Group, Stack, Text, Textarea, TextInput, Title } from '@mantine/core';
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
    <>
      <div className={styles.contact}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Title order={1}>Contact Me</Title>
          <Text>Hi there, contact me to ask me about anything you have in mind.</Text>
          <Stack my={'md'}>
            <Group grow>
              <TextInput id="first_name" label="First Name" placeholder="Enter your first name" radius="md" />
              <TextInput id="last_name" label="Last Name" placeholder="Enter your last name" radius="md" />
            </Group>
            <TextInput id="email" label="Email" placeholder="yourname@email.com" radius="md" type="email" />
            <Textarea
              id="message"
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              minRows={4}
              maxRows={4}
              radius="md"
            />
            <Checkbox label={`You agree to providing your data to ${name} who may contact you.`} />
          </Stack>
          <Button fullWidth type="submit" radius={'md'} id="btn_submit">
            Send Message
          </Button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
