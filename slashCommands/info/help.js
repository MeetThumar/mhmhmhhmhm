const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton
} = require("discord.js");
const eec = require(`${process.cwd()}/structures/botconfig/embed.json`);

module.exports = {
  name: "help",
  aliases: ['h'],
  usage: '[command]',
  description: "Sends a menu with options!",
  category: "info",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  async execute(client, interaction, args, ee) {
    try {
      if (args[0]) {
        const embed = new MessageEmbed()
          .setColor(ee.color)

        const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(.toLowerCase()));
        if (!cmd) {
          return interaction.reply({
            embeds: [embed
              .setColor(ee.wrongcolor)
              .setDescription(`${client.allEmojis.x} No Information found for the command **${.toLowerCase()}**`)
            ]
          });
        }
        if (cmd.name) embed.setTitle(`${client.allEmojis.y} Information About the Commands`);
        if (cmd.name) embed.addField("**<a:ag_ARROW:959084917071937607> Command name**", `\`\`\`${cmd.name}\`\`\``);
        if (cmd.description) embed.addField("**<a:ag_ARROW:959084917071937607> Description**", `\`\`\`${cmd.description}\`\`\``);
        if (cmd.aliases) try {
          embed.addField("**<a:ag_ARROW:959084917071937607> Aliases**", `\`\`\`${cmd.aliases.map((a) => `${a}`).join("`, `")}\`\`\``);
        } catch {}
        if (cmd.cooldown) embed.addField("**<a:ag_ARROW:959084917071937607> Cooldown**", `\`\`\`${cmd.cooldown} Seconds\`\`\``);
        if (cmd.usage) {
          embed.addField("**<a:ag_ARROW:959084917071937607> Usage**", `\`\`\`${prefix}${cmd.usage}\`\`\``);
          // embed.setFooter("Syntax: <> = required, [] = optional");
        }
        return interaction.reply({
          embeds: [embed]
        });
      } else {
        // Main Buttons
        let button_home = new MessageButton().setStyle('SECONDARY').setCustomId('Home').setEmoji("937952762765914192").setLabel("Home")
        let button_cmd_list = new MessageButton().setStyle('SECONDARY').setCustomId('Command_List').setEmoji("903985507963383869").setLabel("Commands List")
        let button_button_menu = new MessageButton().setStyle('SECONDARY').setCustomId('Button_Menu').setEmoji("923142056342347786").setLabel("Buttons Menu")

        // Category Buttons
        let button_overview = new MessageButton().setStyle('SECONDARY').setCustomId('Overview').setEmoji("899930695521148929")
        let button_info = new MessageButton().setStyle('SECONDARY').setCustomId('Information').setEmoji("🔰")
        let button_music = new MessageButton().setStyle('SECONDARY').setCustomId('Music').setEmoji("919059393268572202")
        let button_setup = new MessageButton().setStyle('SECONDARY').setCustomId('Setup').setEmoji("💪")
        let button_mod = new MessageButton().setStyle('SECONDARY').setCustomId('Moderation').setEmoji("903984765638697012")
        let button_level = new MessageButton().setStyle('SECONDARY').setCustomId('Ranking').setEmoji('903985530218356787')
        let button_fun = new MessageButton().setStyle('SECONDARY').setCustomId('Fun').setEmoji("🕹️")
        let button_mini = new MessageButton().setStyle('SECONDARY').setCustomId('Mini Games').setEmoji("901781384232857630")
        let button_giveaway = new MessageButton().setStyle('SECONDARY').setCustomId('Giveaway').setEmoji("🎉")
        let button_utility = new MessageButton().setStyle('SECONDARY').setCustomId('Utility').setEmoji("🔨")
        let button_report = new MessageButton().setStyle('SECONDARY').setCustomId('Report').setEmoji("903985507963383869")

        let menuOptions = [{
            label: 'Overview',
            description: 'My Overview of me!',
            value: 'Overview',
            emoji: '899930695521148929',
          },
          {
            label: 'Information',
            description: 'Commands to share Information',
            value: 'Information',
            emoji: '🔰',
          },
          {
            label: 'Music',
            description: 'Commands to play Music',
            value: 'Music',
            emoji: '919059393268572202',
          },
          {
            label: 'Setup',
            description: 'Commands to setup Systems',
            value: 'Setup',
            emoji: '💪',
          },
          {
            label: 'Moderation',
            description: 'Commands to Moderate the Server',
            value: 'Moderation',
            emoji: '903984765638697012',
          },
          {
            label: 'Ranking',
            description: 'Commands to show Ranks',
            value: 'Ranking',
            emoji: '903985530218356787',
          },
          {
            label: 'Fun',
            description: 'The epic ways to have fun on discord',
            value: 'Fun',
            emoji: '🕹️',
          },
          {
            label: 'Mini Games',
            description: 'Commands for Minigames with the Bot',
            value: 'Mini Games',
            emoji: '901781384232857630',
          },
          {
            label: 'Giveaway',
            description: 'Giveaway Commands',
            value: 'Giveaway',
            emoji: '🎉',
          },
          {
            label: 'Utility',
            description: 'Utility Commands',
            value: 'Utility',
            emoji: '🔨',
          },
          {
            label: 'Report',
            description: 'Commands to Report bugs, feedbacks and suggestions.',
            value: 'Report',
            emoji: '903985507963383869',
          },
        ];

        let menuSelection = new MessageSelectMenu()
          .setCustomId("MenuSelection")
          .setPlaceholder("Click me to view the Help Menu Category Pages!")
          .setMinValues(1)
          .setMaxValues(5)
          .addOptions(menuOptions.filter(Boolean))

        let allbuttons_home_list_Button = new MessageActionRow()
          .addComponents([button_home, button_cmd_list, button_button_menu])

        //   let buttonhome = new MessageActionRow()
        //   .addComponents([button_home.setDisabled(true), button_cmd_list.setDisabled(false), button_button_menu.setDisabled(false)])

        // let allbuttonscommand_commant = new MessageActionRow()
        //   .addComponents([button_home.setDisabled(false), button_cmd_list.setDisabled(true), button_button_menu.setDisabled(false)])

        // let allbuttonsbuttons = new MessageActionRow()
        //   .addComponents([button_home.setDisabled(false), button_cmd_list.setDisabled(false), button_button_menu.setDisabled(true)])

        let buttonCategory = new MessageActionRow()
          .addComponents([button_overview, button_info, button_music, button_setup, button_mod])

        let buttonCategory2 = new MessageActionRow()
          .addComponents([button_level, button_fun, button_mini, button_giveaway, button_utility])

        let buttonCategory3 = new MessageActionRow()
          .addComponents([button_report])

        let menuCategory = new MessageActionRow()
          .addComponents([menuSelection])

        const allbuttons_home = [allbuttons_home_list_Button, menuCategory]
        const allbuttons_command_commant = [allbuttons_home_list_Button]
        const allbuttons_buttons = [allbuttons_home_list_Button, buttonCategory, buttonCategory2, buttonCategory3]

        let OverviewEmbed = new MessageEmbed()
          .setColor(ee.color)
          .setImage(eec.gif)
          .setFooter("Page Overview\n" + client.user.username, client.user.displayAvatarURL())
          .setAuthor(`${client.user.username} Help Menu`, client.user.displayAvatarURL())
          // .setTitle(`<:setting:901790652768079922> ${client.user.username} Help Menu`)
          .setDescription(`__**Prefix Information**__
> My Prefix For **${interaction.guild.name}** is \`${prefix}\`
> You can also mention ${client.user} to get prefix info.`)
          .addFields([{
            name: `<:category_1:959026152897404938> **Categories:**`,
            value: `>>> **<:form:958097859394273310> Overview
<:information_emoji:958098486967025674> Information
<:music_1:959022204056641576> Music
<:setup:959022583821533214> Setup
<:moderation_emoji:958098576188276766> Moderation
<:fun_emoji:958098337276497935> Fun
<a:games_1:958250904379871272> Mini Games
<a:giveaway_1:959023028841353297> Giveaway
<a:utils_emoji:958098182036922388> Utility
<:report_1:959023235394043924> Report
<a:level_up:959023362229829672> Ranking**`
          }])
          .addField(`<:links_1:959023503653359618> **Links:**`, `>>> **[Support Server](https://dsc.gg/freakbotsupport) | [Invite Me](https://discord.com/api/oauth2/authorize?client_id=948230363413639209&permissions=8&scope=bot%20applications.commands) | [Freak Music](https://discord.com/api/oauth2/authorize?client_id=957348725129359520&permissions=139652884800&scope=bot%20applications.commands) | [Freak Ticket](https://discord.com/api/oauth2/authorize?client_id=957526708846727198&permissions=8&scope=bot)**`)

        var edited = false;

        let helpmsg = await interaction.reply({
          embeds: [OverviewEmbed],
          components: allbuttons_home
        }).catch(e => {
          console.log(e)
          return
        });

        const collector = helpmsg.createMessageComponentCollector({
          filter: (i) => (i.isButton() || i.isSelectMenu()) && i.user && i.user client.author.id == client.user.id,
          time: 180e3
        });

        collector.on('collect', async b => {
          try {
            if (b.isButton()) {
              if (b.user.id !== interaction.author.id)
                return b.reply({
                  content: `${client.allEmojis.x} **Only the one who typed \`${prefix}help\` is allowed to react!**`,
                  ephemeral: true
                });

              if (b.customId == "Home") {
                await helpmsg.edit({
                  embeds: [OverviewEmbed],
                  components: allbuttons_home,
                  // ephemeral: true
                }).catch(e => {})
                b.deferUpdate().catch(e => {})
              }
              if (b.customId == "Command_List") {
                await helpmsg.edit({
                  embeds: [new MessageEmbed()
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setColor(ee.color)
                    .setAuthor(`${client.user.username} Help Menu`, interaction.user.displayAvatarURL())
                    .addFields({
                      name: `<:information_emoji:958098486967025674>┃Information`,
                      value: `${client.commands.filter((cmd) => cmd.category === "info").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<:music_1:959022204056641576>┃Music`,
                      value: `${client.commands.filter((cmd) => cmd.category === "music").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<:setup:959022583821533214>┃Setup`,
                      value: `${client.commands.filter((cmd) => cmd.category === "setup").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<:moderation_emoji:958098576188276766>┃Moderation`,
                      value: `${client.commands.filter((cmd) => cmd.category === "moderation").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<a:level_up:959023362229829672>┃Ranking`,
                      value: `${client.commands.filter((cmd) => cmd.category === "leveling").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<:fun_emoji:958098337276497935>┃Fun`,
                      value: `${client.commands.filter((cmd) => cmd.category === "fun").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<a:games_1:958250904379871272>┃Mini Games`,
                      value: `${client.commands.filter((cmd) => cmd.category === "games").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<a:giveaway_1:959023028841353297>┃Giveaway`,
                      value: `${client.commands.filter((cmd) => cmd.category === "giveaway").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<a:utils_emoji:958098182036922388>┃Utility`,
                      value: `${client.commands.filter((cmd) => cmd.category === "utility").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    }, {
                      name: `<:report_1:959023235394043924>┃Report`,
                      value: `${client.commands.filter((cmd) => cmd.category === "report").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`
                    })
                  ],
                  components: allbuttons_command_commant,
                  // ephemeral: true
                }).catch(e => {})
                b.deferUpdate().catch(e => {})
              }
              if (b.customId == "Button_Menu") {
                await helpmsg.edit({
                  embeds: [OverviewEmbed],
                  components: allbuttons_buttons,
                  // ephemeral: true
                }).catch(e => {})
                b.deferUpdate().catch(e => {})
              }

              let embeds = allotherembeds_eachcategory();

              if (b.customId == "Overview") {
                return b.reply({
                  embeds: [OverviewEmbed],
                  ephemeral: true
                })
              }
              if (b.customId == "Information") {
                return b.reply({
                  embeds: [embeds[0]],
                  ephemeral: true
                })
              }
              if (b.customId == "Music") {
                return b.reply({
                  embeds: [embeds[1]],
                  ephemeral: true
                })
              }
              if (b.customId == "Setup") {
                return b.reply({
                  embeds: [embeds[2]],
                  ephemeral: true
                })
              }
              if (b.customId == "Moderation") {
                return b.reply({
                  embeds: [embeds[3]],
                  ephemeral: true
                })
              }
              if (b.customId == "Ranking") {
                return b.reply({
                  embeds: [embeds[4]],
                  ephemeral: true
                })
              }
              if (b.customId == "Fun") {
                return b.reply({
                  embeds: [embeds[5]],
                  ephemeral: true
                })
              }
              if (b.customId == "Mini Games") {
                return b.reply({
                  embeds: [embeds[6]],
                  ephemeral: true
                })
              }
              if (b.customId == "Giveaway") {
                return b.reply({
                  embeds: [embeds[7]],
                  ephemeral: true
                })
              }
              if (b.customId == "Utility") {
                return b.reply({
                  embeds: [embeds[8]],
                  ephemeral: true
                })
              }
              if (b.customId == "Report") {
                return b.reply({
                  embeds: [embeds[9]],
                  ephemeral: true
                })
              }
            }
            if (b.isSelectMenu()) {
              let index = 0;
              let vembeds = []
              let theembeds = [OverviewEmbed, ...allotherembeds_eachcategory()];
              for (const value of b.values) {
                switch (value.toLowerCase()) {
                  case "overview":
                    index = 0;
                    break;
                  case "information":
                    index = 1;
                    break;
                  case "music":
                    index = 2;
                    break;
                  case "setup":
                    index = 3;
                    break;
                  case "moderation":
                    index = 4;
                    break;
                  case "ranking":
                    index = 5;
                    break;
                  case "fun":
                    index = 6;
                    break;
                  case "mini games":
                    index = 7;
                    break;
                  case "giveaway":
                    index = 8;
                    break;
                  case "utility":
                    index = 9;
                    break;
                  case "report":
                    index = 10;
                    break;
                }
                vembeds.push(theembeds[index])
              }
              b.reply({
                embeds: vembeds,
                ephemeral: true
              });
            }
          } catch (e) {
            console.log(e)
          }
        });

        // let d_menurow = new MessageActionRow()
        //   .addComponents([menuSelection.setDisabled(true)])

        // let d_menurow4 = new MessageActionRow()
        //   .addComponents([button_home.setDisabled(true), button_cmd_list.setDisabled(true), button_button_menu.setDisabled(true)])

        // let d_buttonrow = new MessageActionRow()
        //   .addComponents([button_overview.setDisabled(true), button_info.setDisabled(true), button_music.setDisabled(true), button_setup.setDisabled(true), button_mod.setDisabled(true)])

        // let d_buttonrow2 = new MessageActionRow()
        //   .addComponents([button_level.setDisabled(true), button_fun.setDisabled(true), button_mini.setDisabled(true), button_utility.setDisabled(true), button_report.setDisabled(true)])

        // // const alldisablemenu = [d_menurow]
        // const alldisablemenu = [d_menurow4, d_menurow, d_buttonrow, d_buttonrow2]

        collector.on('end', collected => {
          if (!edited) {
            edited = true;
            helpmsg.edit({
              content: `${client.allEmojis.x} **This Help Menu is expired! Please retype \`${prefix}help\` to view again.**`,
              embeds: [helpmsg.embeds[0]],
              components: []
            }).catch((e) => {})
          }
        });
      }

      function allotherembeds_eachcategory(filterdisabled = false) {

        var embeds = [];

        var embed0 = new MessageEmbed()
          .addField(`<:information_emoji:958098486967025674>┃__**INFORMATION**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "info").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed0)

        var embed1 = new MessageEmbed()
          .addField(`<:music_1:959022204056641576>┃__**MUSIC**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "music").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed1)

        var embed2 = new MessageEmbed()
          .addField(`<:setup:959022583821533214>┃__**SETUP**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "setup").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed2)

        var embed3 = new MessageEmbed()
          .addField(`<:moderation_emoji:958098576188276766>┃__**MODERATION**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "moderation").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed3)

        var embed4 = new MessageEmbed()
          .addField(`<a:level_up:959023362229829672>┃__**RANKING**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "leveling").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed4)

        var embed5 = new MessageEmbed()
          .addField(`<:fun_emoji:958098337276497935>┃__**FUN**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "fun").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed5)

        var embed6 = new MessageEmbed()
          .addField(`<a:games_1:958250904379871272>┃__**MINI GAMES**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "games").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed6)

        var embed7 = new MessageEmbed()
          .addField(`<a:giveaway_1:959023028841353297>┃__**GIVEAWAY**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "giveaway").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed7)

        var embed8 = new MessageEmbed()
          .addField(`<a:utils_emoji:958098182036922388>┃__**UTILITY**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "utility").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed8)

        var embed9 = new MessageEmbed()
          .addField(`<:report_1:959023235394043924>┃__**REPORT**__`,
            `>>> ${client.commands.filter((cmd) => cmd.category === "report").sort((a,b) => a.name.localeCompare(b.name)).map((cmd) => `\`${cmd.name}\``).join("︲")}`)
        embeds.push(embed9)

        return embeds.map((embed, index) => {
          return embed
            .setColor(ee.color)
            .setImage(eec.gif)
            // .setThumbnail(ee.footericon)
            .setFooter(`Page ${index + 1} / ${embeds.length}\nTo see command Descriptions and Information, type: ${prefix}help [CMD NAME]`, ee.footericon);
        })
      }
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = interaction.channels.cache.get(config.botlogs.errorLogsChannel);
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setAuthor(interaction.guild.name, interaction.guild.iconURL({
            dynamic: true
          }))
          .setColor("RED")
          .setTitle(`${client.allEmojis.x} Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${interaction.guild.memberCount} Users`)
        ]
      })
    }
  }
}
