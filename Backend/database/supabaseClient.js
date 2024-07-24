const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://wiyhjrkeyamrepiahifl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeWhqcmtleWFtcmVwaWFoaWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3MzU4MzQsImV4cCI6MjAzNzMxMTgzNH0.X_luQRfTw-nrkDgE0eAAfvigcip1u4anb7R9xKWK5SY';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
