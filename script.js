document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://nrkzjbojqyzsvncvgbwt.supabase.co', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ya3pqYm9qcXl6c3ZuY3ZnYnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg3NzksImV4cCI6MjA1NDQ5NDc3OX0.QScMS0B1RvaIgh3rm4shqyaif2PB6xwD-QWHub12oAM',
            'Authorization': 'Bearer your-supabase-api-key'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
