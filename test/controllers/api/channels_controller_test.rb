require "test_helper"
require "shared/mailer_test_helper"

class Api::ChannelsControllerTest < ActionDispatch::IntegrationTest
  include ActionMailer::TestHelper

  test "can get owner's youtube channel by identifier" do
    channel = channels(:global_yt2)
    publisher = channel.publisher

    get "/api/owners/#{URI.escape(publisher.owner_identifier)}/channels/#{URI.escape(channel.details.channel_identifier)}",
        headers: { "HTTP_AUTHORIZATION" => "Token token=fake_api_auth_token" }

    assert_equal 200, response.status

    assert_match /#{channel.details.channel_identifier}/, response.body
  end

  test "can get owner's site channel by identifier" do
    channel = channels(:verified)
    publisher = channel.publisher

    url = "/api/owners/#{URI.escape(publisher.owner_identifier)}/channels/#{URI.escape(channel.details.channel_identifier)}"

    assert_routing url, format: :json, controller: "api/channels", action: "show", owner_id: publisher.owner_identifier, channel_id: channel.details.channel_identifier

    get url, headers: { "HTTP_AUTHORIZATION" => "Token token=fake_api_auth_token" }

    assert_equal 200, response.status

    assert_match /#{channel.details.channel_identifier}/, response.body
  end

  test "can create site channels from json" do
    owner = publishers(:small_media_group)

    new_channel_details = {
        "brave_publisher_id": "goodspud.com"
    }

    post "/api/owners/#{URI.escape(owner.owner_identifier)}/channels",
         as: :json, params: { channel: new_channel_details },
         headers: { "HTTP_AUTHORIZATION" => "Token token=fake_api_auth_token" }

    assert_equal 200, response.status

    response_json = JSON.parse(response.body)
    assert response_json["show_verification_status"]
    assert_equal "goodspud.com", response_json["id"]
  end

  test "created site channel has created_via_api flag set" do
    owner = publishers(:small_media_group)

    new_channel_details = {
        "brave_publisher_id": "goodspud.com"
    }

    post "/api/owners/#{URI.escape(owner.owner_identifier)}/channels",
         as: :json, params: { channel: new_channel_details },
         headers: { "HTTP_AUTHORIZATION" => "Token token=fake_api_auth_token" }

    assert_equal 200, response.status
    channel = Channel.order(created_at: :asc).last
    assert channel.created_via_api?
  end
end
