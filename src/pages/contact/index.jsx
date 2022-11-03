import { Button, Checkbox, Group, Stack, Text, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import Footer from '../../components/Footer';
import { name } from '../../info';
import styles from './index.module.scss';

export const Contact = () => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      TOS: false,
    },

    validate: {
      firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 1 ? 'Please enter a message' : null),
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
              <TextInput
                id="first_name"
                label="First Name"
                placeholder="Enter your first name"
                radius="md"
                {...form.getInputProps('firstName')}
              />
              <TextInput
                id="last_name"
                label="Last Name"
                placeholder="Enter your last name"
                radius="md"
                {...form.getInputProps('lastName')}
              />
            </Group>
            <TextInput
              id="email"
              label="Email"
              placeholder="yourname@email.com"
              radius="md"
              type="email"
              {...form.getInputProps('email')}
            />
            <Textarea
              id="message"
              label="Message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              minRows={4}
              maxRows={4}
              radius="md"
              {...form.getInputProps('message')}
            />
            <Checkbox
              label={`You agree to providing your data to ${name} who may contact you.`}
              {...form.getInputProps('TOS')}
            />
          </Stack>
          <Button fullWidth type="submit" radius={'md'} id="btn__submit">
            Send Message
          </Button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
