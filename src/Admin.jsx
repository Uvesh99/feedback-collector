import { useEffect, useState } from 'react';
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { supabase } from './lib/supabase';

function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data } = await supabase
        .from('feedbacks')
        .select('*')
        .order('created_at', { ascending: false });
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Admin Panel - Submitted Feedbacks
      </Typography>
      <Grid container spacing={2}>
        {feedbacks.map((fb) => (
          <Grid item xs={12} key={fb.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{fb.full_name}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{fb.email}</Typography>
                <Typography variant="body1" paragraph>{fb.message}</Typography>
                <Typography variant="caption">
                  {new Date(fb.created_at).toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Admin;

