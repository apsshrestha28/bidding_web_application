# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    
    # Define abilities for the passed in user here. For example:
    #
   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities


    alias_action :create, :read, :update, :destroy, to: :crud
    
    can :crud, User do |a_user|
      user == a_user
    end
    can(:crud, Auction) do |auction|
      user==auction.user
      # Here user is comming from our method_helper current_user in application controller
    end

    # In following we are allowing the user to perform CRUD on Answer if the user is its owner
    can(:crud, Bid)do |bid|
      user==bid.user
    end
  end
end
