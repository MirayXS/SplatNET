const { MessageEmbed } = require('discord.js')
const request = require('superagent')
const { Menu } = require('discord.js-menu');
const { RandomColorGenerator } = require('../../helper.js')

module.exports = {
    name: "splatnet",
    category: "general",
    description: "Displays contents of the splatnet shop",
  execute(message) {

request.get('https://splatoon2.ink//data/merchandises.json').set('User-Agent', "SplatNET/5.2.0 (Discord Author Contact: XxMirayxX21#3561) [Repository: github.com/MirayXS/SplatNET]")
    .end((err, response) => {
      if (message.channel.type === 'dm') return message.channel.send("DiscordAPIError: Cannot execute action on a DM channel")
new Menu(message.channel, message.author.id, [
  {
      name: "first",
      content: new MessageEmbed({
          title: response.body.merchandises[0].gear.name,
          thumbnail:{
            url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[0].gear.image,
          },
          color: RandomColorGenerator(),
          fields: [
              {
                  name: "Brand",
                  value: response.body.merchandises[0].gear.brand.name,
                  inline: true
              },
              {
                name: "Price",
                value: response.body.merchandises[0].price,
                inline: true
            },
            {
              name: "Main Gear Ability",
              value: response.body.merchandises[0].skill.name,
              inline: true
          },
        {
          name: "Original Price",
          value: response.body.merchandises[0]?.original_gear.price,
          inline: true
      },
      {
        name: "Common Gear Ability",
        value: response.body.merchandises[0]?.original_gear?.skill.name,
        inline: true
    }
          ]
      }),
      reactions: {
        "◀": "final",
        "▶": "next",
          "⏹": "stop",   
           }
  },
  {
    name: "second",
    content: new MessageEmbed({
        title: response.body.merchandises[1].gear.name,
        thumbnail:{
          url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[1].gear.image,
        },
        color: RandomColorGenerator(),
        fields: [
            {
                name: "Brand",
                value: response.body.merchandises[1].gear.brand.name,
                inline: true
            },
            {
              name: "Price",
              value: response.body.merchandises[1].price,
              inline: true
          },
          {
            name: "Main Gear Ability",
            value: response.body.merchandises[1].skill.name,
            inline: true
        },
      {
        name: "Original Price",
        value: response.body.merchandises[1]?.original_gear.price,
        inline: true
    },
    {
      name: "Common Gear Ability",
      value: response.body.merchandises[1]?.original_gear?.skill.name,
      inline: true
  }
          ]
      }),
      reactions: {
        "◀": "previous",
        "▶": "next",
          "⏹": "stop",   
      }
  },
  {
    name: "third",
    content: new MessageEmbed({
        title: response.body.merchandises[2].gear.name,
        thumbnail:{
          url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[2].gear.image,
        },
        color: RandomColorGenerator(),
        fields: [
            {
                name: "Brand",
                value: response.body.merchandises[2].gear.brand.name,
                inline: true
            },
            {
              name: "Price",
              value: response.body.merchandises[2].price,
              inline: true
          },
          {
            name: "Main Gear Ability",
            value: response.body.merchandises[2].skill.name,
            inline: true
        },
      {
        name: "Original Price",
        value: response.body.merchandises[2]?.original_gear.price,
        inline: true
    },
    {
      name: "Common Gear Ability",
      value: response.body.merchandises[2]?.original_gear?.skill.name,
      inline: true
  }
          ]
      }),
      reactions: {
        "◀": "previous",
        "▶": "next",
          "⏹": "stop",   
      }
    },
    {
      name: "fourth",
      content: new MessageEmbed({
          title: response.body.merchandises[3].gear.name,
          thumbnail:{
            url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[3].gear.image,
          },
          color: RandomColorGenerator(),
          fields: [
              {
                  name: "Brand",
                  value: response.body.merchandises[3].gear.brand.name,
                  inline: true
              },
              {
                name: "Price",
                value: response.body.merchandises[3].price,
                inline: true
            },
            {
              name: "Main Gear Ability",
              value: response.body.merchandises[3].skill.name,
              inline: true
          },
        {
          name: "Original Price",
       //   value: response.body.merchandises[3]?.original_gear.price,
          inline: true
      },
      {
        name: "Common Gear Ability",
        value: response.body.merchandises[3]?.original_gear?.skill.name,
        inline: true
    }
            ]
        }),
        reactions: {
          "◀": "previous",
          "▶": "next",
            "⏹": "stop",   
        }
      },
      {
        name: "fifth",
        content: new MessageEmbed({
            title: response.body.merchandises[4].gear.name,
            thumbnail:{
              url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[4].gear.image,
            },
            color: RandomColorGenerator(),
            fields: [
                {
                    name: "Brand",
                    value: response.body.merchandises[4].gear.brand.name,
                    inline: true
                },
                {
                  name: "Price",
                  value: response.body.merchandises[4].price,
                  inline: true
              },
              {
                name: "Main Gear Ability",
                value: response.body.merchandises[4].skill.name,
                inline: true
            },
          {
            name: "Original Price",
            value: response.body.merchandises[4]?.original_gear.price,
            inline: true
        },
        {
          name: "Common Gear Ability",
          value: response.body.merchandises[4]?.original_gear?.skill.name,
          inline: true
      }
              ]
          }),
          reactions: {
            "◀": "previous",
            "▶": "next",
              "⏹": "stop",   
          }
        },
        {
          name: "final",
          content: new MessageEmbed({
              title: response.body.merchandises[5].gear.name,
              thumbnail:{
                url: 'https://splatoon2.ink/assets/splatnet'+response.body.merchandises[5].gear.image,
              },
              color: RandomColorGenerator(),
              fields: [
                  {
                      name: "Brand",
                      value: response.body.merchandises[5].gear.brand.name,
                      inline: true
                  },
                  {
                    name: "Price",
                    value: response.body.merchandises[5].price,
                    inline: true
                },
                {
                  name: "Main Gear Ability",
                  value: response.body.merchandises[5].skill.name,
                  inline: true
              },
            {
              name: "Original Price",
              value: response.body.merchandises[5]?.original_gear.price,
              inline: true
          },
          {
            name: "Common Gear Ability",
            value: response.body.merchandises[5]?.original_gear?.skill.name,
            inline: true
        }
                ]
            }),
            reactions: {
              "◀": "previous",
              "▶": "first",
                "⏹": "stop",   
            }
          }
]);
  })
 }
}