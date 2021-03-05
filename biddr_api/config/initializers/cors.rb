Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # orgin acccepts an array of domain names. These are all the whitelisted DOMAINS that are allowed to make CORS request
    origins 'localhost:5503'
    resource(
      "/api/*", 
      headers: :any, 
      credentials: true, 
      methods: [:get, :post, :delete, :patch, :put, :options]
    )
  end
end