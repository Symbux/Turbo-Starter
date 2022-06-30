# Database Setup

1. Change directory to the db folder.

```bash
cd db
```

2. Generate a key for your mongo replica.

```bash
openssl rand -base64 756 > keys/replica.key
```

3. Copy and create your docker-compose.yml file.
```bash
cp docker-compose.example.yml docker-compose.yml
```

4. Change the admin account details.
```bash
nano docker-compose.yml
```
_Then edit the `YOUR_USERNAME` and `YOUR_PASSWORD` fields under the environment section._

4. Bring up the container.

```bash
docker-compose up -d
```

5. Now tell mongo to sync the replica.

```bash
docker-compose exec mongo mongo --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: '127.0.0.1:27017'}]});"
```