(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{555:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Linux 用户不是在修 GRUB，就是在修 GRUB 的路上。")]),s._v(" "),a("p",[s._v("博主只知道更新 Windows 容易把 Linux 覆盖掉，没想到最近更新 BIOS，把 EFI 还是什么改了，引导不了 Manjaro 了。")]),s._v(" "),a("p",[s._v("本文假定：")]),s._v(" "),a("ul",[a("li",[s._v("使用 EFI 进行引导，EFI 分区在 "),a("code",[s._v("/dev/nvme0n1p1")])]),s._v(" "),a("li",[s._v("Manjaro 分区在 "),a("code",[s._v("/dev/nvme0n1p5")])])]),s._v(" "),a("h2",{attrs:{id:"_1-从-manjaro-live-cd-启动到硬盘里的-manjaro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-从-manjaro-live-cd-启动到硬盘里的-manjaro"}},[s._v("#")]),s._v(" 1. 从 Manjaro Live CD 启动到硬盘里的 Manjaro")]),s._v(" "),a("p",[s._v("进入 Manjaro Live CD 后，需要挂载硬盘里的 Manjaro，就可以 "),a("code",[s._v("chroot")]),s._v(" 到硬盘里的 Manjaro。")]),s._v(" "),a("p",[s._v("查看分区情况，确认分区号：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("manjaro@manjaro ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\nDisk /dev/nvme0n1: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("476.94")]),s._v(" GiB, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512110190592")]),s._v(" bytes, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000215216")]),s._v(" sectors\nDisk model: WDC PC SN730 SDBPNTY-512G-1101          \nUnits: sectors of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisklabel type: gpt\nDisk identifier: 8AE01A08-4A72-4BD0-97B0-ACD7705FCD94\n\nDevice             Start        End   Sectors   Size Type\n/dev/nvme0n1p1      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("534527")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("532480")]),s._v("   260M EFI System\n/dev/nvme0n1p2    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("534528")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("567295")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32768")]),s._v("    16M Microsoft reserved\n/dev/nvme0n1p3    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("567296")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("746506239")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("745938944")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("355")]),s._v(".7G Microsoft basic data\n/dev/nvme0n1p4 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("998166528")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000214527")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048000")]),s._v("  1000M Windows recovery environment\n/dev/nvme0n1p5 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("788449280")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("893306879")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104857600")]),s._v("    50G Linux filesystem\n/dev/nvme0n1p6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("893306880")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("998166527")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104859648")]),s._v("    50G Linux filesystem\n/dev/nvme0n1p7 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("746506240")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("788449279")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41943040")]),s._v("    20G Linux swap\n")])])]),a("p",[s._v("挂载 Manjaro 分区到 "),a("code",[s._v("/mnt")]),s._v("、EFI 分区到 "),a("code",[s._v("/mnt/boot/efi")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("manjaro@manjaro ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/nvme0n1p5  /mnt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以 ls /mnt 确认挂载对没有")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有 /mnt/boot/efi 可以创建该文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("manjaro@manjaro ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/nvme0n1p1 /mnt/boot/efi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以 ls /mnt/boot/efi 确认挂载对没有")]),s._v("\n")])])]),a("p",[s._v("Arch 提供了 "),a("code",[s._v("arch-chroot")]),s._v("，Manjaro 改为了 "),a("code",[s._v("manjaro-chroot")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("manjaro-chroot /mnt/\n")])])]),a("p",[s._v("进入到主系统以后，可以看看根目录、"),a("code",[s._v("boot")]),s._v(" 目录，或者 "),a("code",[s._v("sudo -u <你的用户名> zsh")]),s._v(" 确认一下。")]),s._v(" "),a("p",[s._v("另外，我们没有挂载 "),a("code",[s._v("home")]),s._v(" 分区，如果需要，可以手动挂载。")]),s._v(" "),a("h2",{attrs:{id:"_2-将-grub-安装到-efi-分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-将-grub-安装到-efi-分区"}},[s._v("#")]),s._v(" 2. 将 GRUB 安装到 EFI 分区")]),s._v(" "),a("p",[s._v("注意，下面的参数 "),a("code",[s._v("/dev/nvme0n1")]),s._v(" 是整个硬盘。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ grub-install --recheck /dev/nvme0n1 --efi-directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/boot/efi\nInstalling "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" x86_64-efi platform.\nInstallation finished. No error reported.\n")])])]),a("p",[s._v("安装完成后，可以确认一下 "),a("code",[s._v("/boot/efi")]),s._v(" 下确实有了 "),a("code",[s._v("grub")]),s._v(" 文件夹。")]),s._v(" "),a("h2",{attrs:{id:"_3-更新-grub-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-更新-grub-配置"}},[s._v("#")]),s._v(" 3. 更新 GRUB 配置")]),s._v(" "),a("p",[s._v("该命令行会默认将生成的 GRUB 配置输出到屏幕上（如果不想看可以跳过这一步）。可以检查一下是否记录了 Windows 分区。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grub-mkconfig")]),s._v("\n")])])]),a("p",[s._v("当然我们是要写到文件里的。需要写到 EFI 分区下的 "),a("code",[s._v("grub")]),s._v(" 文件夹。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grub-mkconfig")]),s._v(" -o /boot/efi/grub/grub.cfg\n")])])]),a("p",[s._v("写完以后也可以 "),a("code",[s._v("cat /boot/efi/grub/grub.cfg")]),s._v(" 检查一下。")]),s._v(" "),a("p",[s._v("至此就搞定了（大概）。重启 Live CD，拔掉 U 盘，应该就能看到 grub 引导界面了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);