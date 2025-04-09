import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, CircularProgress
} from '@mui/material';
import { supabase } from './lib/supabase';

function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    await supabase.from('feedbacks').insert({
      full_name: form.name,
      email: form.email,
      message: form.message,
    });
    setForm({ name: '', email: '', message: '' });
    setLoading(false);
    setError('');
    alert('Feedback submitted!');
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Feedback Collector
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
          <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <TextField label="Feedback" name="message" multiline rows={4} value={form.message} onChange={handleChange} required />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Home;
